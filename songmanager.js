const player = require('play-sound')
class Song{
    constructor(songfile){
       super(songfile)
       this.songfile = songfile
    }
    PlaySong(){
        player.play(this.songfile, function(err){
            if (err) console.log(`[SONGMANAGER]: Error while playing song. Reason: ${err}`)
          })
    }

    StopSong(){
        player.kill(this.songfile, function(err){
            if (err) console.log(`[SONGMANAGER]: Error while playing song. Reason: ${err}`)
          })
    }

    SongInfo(){
        console.log(`Song file: ${this.songfile}`)
    }
}

