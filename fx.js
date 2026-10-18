/* Soft sounds, optional ambient music and vibration. Everything is generated with Web Audio, no audio files. */
(function(){
  var ctx=null,master=null,musicNode=null,timer=null,on={snd:true,mus:false,vib:true,vol:0.6},step=0;
  function AC(){return window.AudioContext||window.webkitAudioContext}
  function ensure(){
    if(ctx)return ctx;
    var C=AC();if(!C)return null;
    try{ctx=new C();master=ctx.createGain();master.gain.value=1;master.connect(ctx.destination)}catch(e){ctx=null}
    return ctx;
  }
  function unlock(){var c=ensure();if(c&&c.state==='suspended')c.resume&&c.resume()}
  function tone(f,t0,dur,type,gain,dest){
    var c=ctx;if(!c)return;
    var o=c.createOscillator(),g=c.createGain();
    o.type=type||'sine';o.frequency.value=f;
    var v=gain*on.vol;
    g.gain.setValueAtTime(0.0001,t0);
    g.gain.exponentialRampToValueAtTime(Math.max(v,0.0002),t0+0.012);
    g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
    o.connect(g);g.connect(dest||master);o.start(t0);o.stop(t0+dur+0.05);
  }
  var N={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,C5:523.25,D5:587.33,E5:659.25,G5:783.99,A5:880,C6:1046.5,F3:174.61,A3:220,E3:164.81,B4:493.88,F4:349.23};
  function play(fn){if(!on.snd)return;if(!ensure())return;unlock();fn(ctx.currentTime+0.01)}
  var FX={
    set:function(o){for(var k in o)on[k]=o[k];if(master&&musicNode)musicNode.gain.value=0.5*on.vol;if(!on.mus)FX.music(false)},
    unlock:unlock,
    tap:function(){play(function(t){tone(900,t,0.05,'sine',0.05)})},
    ok:function(){play(function(t){tone(N.C5,t,0.28,'sine',0.14);tone(N.E5,t+0.08,0.3,'sine',0.12);tone(N.G5,t+0.16,0.45,'sine',0.1)});FX.vibrate(18)},
    bad:function(){play(function(t){tone(N.A3,t,0.35,'triangle',0.16);tone(N.F3,t+0.14,0.45,'triangle',0.14)});FX.vibrate([30,50,30])},
    streak:function(){play(function(t){[N.C5,N.E5,N.G5,N.C6].forEach(function(f,i){tone(f,t+i*0.07,0.4,'sine',0.1)})});FX.vibrate([15,30,15,30,15])},
    done:function(pass){play(function(t){(pass?[N.C5,N.E5,N.G5,N.C6,N.G5]:[N.A4,N.G4,N.E4||N.G4]).forEach(function(f,i){tone(f,t+i*0.12,0.7,'sine',0.11)})});FX.vibrate(pass?[20,40,20,40,60]:25)},
    vibrate:function(p){if(!on.vib)return;try{if(navigator.vibrate)navigator.vibrate(p)}catch(e){}},
    isMusic:function(){return !!timer},
    music:function(go){
      if(!go){
        if(timer){clearInterval(timer);timer=null}
        if(musicNode&&ctx){try{musicNode.gain.cancelScheduledValues(ctx.currentTime);musicNode.gain.setTargetAtTime(0.0001,ctx.currentTime,0.25)}catch(e){}}
        return;
      }
      if(timer||!ensure())return;unlock();
      /* chain: pad+pluck -> lowpass -> echo -> out */
      var c=ctx;
      musicNode=c.createGain();musicNode.gain.value=0.0001;
      var lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1300;
      var dly=c.createDelay(1.5);dly.delayTime.value=0.42;
      var fb=c.createGain();fb.gain.value=0.38;
      var wet=c.createGain();wet.gain.value=0.5;
      musicNode.connect(lp);lp.connect(master);
      lp.connect(dly);dly.connect(fb);fb.connect(dly);dly.connect(wet);wet.connect(master);
      musicNode.gain.setTargetAtTime(0.5*on.vol,c.currentTime,0.8);
      var prog=[[220,261.63,329.63,392],[174.61,220,261.63,329.63],[130.81,196,261.63,329.63],[196,246.94,293.66,392]];
      var pent=[440,523.25,587.33,659.25,783.99,880];
      step=0;
      function pad(chord,t){
        chord.forEach(function(f,i){
          [-4,4].forEach(function(d){
            var o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=f;o.detune.value=d;
            g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(0.028,t+1.8);g.gain.linearRampToValueAtTime(0.0001,t+7.2);
            o.connect(g);g.connect(musicNode);o.start(t);o.stop(t+7.5);
          });
        });
      }
      function pluck(f,t){
        var o=c.createOscillator(),g=c.createGain();o.type='triangle';o.frequency.value=f;
        g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.06,t+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+1.6);
        o.connect(g);g.connect(musicNode);o.start(t);o.stop(t+1.7);
      }
      function bar(){
        var t=c.currentTime+0.05,chord=prog[step%prog.length];step++;
        pad(chord,t);
        for(var i=0;i<4;i++){if(Math.random()<0.7)pluck(pent[Math.floor(Math.random()*pent.length)],t+i*1.5+(Math.random()*0.2));}
      }
      bar();timer=setInterval(bar,6000);
    }
  };
  document.addEventListener('visibilitychange',function(){
    if(!ctx)return;
    if(document.hidden){try{ctx.suspend()}catch(e){}}else{try{ctx.resume()}catch(e){}}
  });
  window.FX=FX;
})();
