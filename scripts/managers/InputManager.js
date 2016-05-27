var InputManager = (function () {
    function InputManager(key_manager) {
        this.key_manager = key_manager;
    }
    InputManager.prototype.Update = function (player) {
        if (player.speaking)
            this.SpeakingUpdate(player);
        else
            this.NormalUpdate(player);
    };
    InputManager.prototype.NormalUpdate = function (player) {
        if (this.key_manager.keys_down[KeyManager.RIGHT]) {
            player.MoveRight();
        }
        else if (this.key_manager.keys_down[KeyManager.LEFT]) {
            player.MoveLeft();
        }
        else {
            player.horizontal_input = false;
        }
        if (this.key_manager.keys_pressed[KeyManager.UP] || this.key_manager.keys_pressed[KeyManager.Z]) {
            player.StartJump();
        }
        else if (this.key_manager.keys_down[KeyManager.UP] || this.key_manager.keys_down[KeyManager.Z]) {
            player.Jump();
        }
        if (this.key_manager.keys_up[KeyManager.UP] || this.key_manager.keys_up[KeyManager.Z]) {
            player.StopJump();
        }
        if (this.key_manager.keys_pressed[KeyManager.DOWN]) {
            player.StartPressingDown();
        }
        else if (this.key_manager.keys_down[KeyManager.DOWN]) {
            player.PressDown();
        }
        else if (this.key_manager.keys_up[KeyManager.DOWN]) {
            player.StopPressingDown();
        }
        if (this.key_manager.keys_pressed[KeyManager.X]) {
            player.PressX();
        }
        if (this.key_manager.keys_pressed[KeyManager.SPACE]) {
            player.NextGlitch();
        }
        if (this.key_manager.keys_pressed[KeyManager.DEL]) {
            if (bg_name !== "RoccoW_iveGotNothing")
                player.Die();
        }
        if (this.key_manager.keys_pressed[KeyManager.H]) {
            room_manager.beat_game = !room_manager.beat_game;
            if (room_manager.beat_game)
                Utils.playSound("pickup", master_volume, 0);
            else
                Utils.playSound("error", master_volume, 0);
        }
        if (this.key_manager.keys_pressed[KeyManager.A]) {
            player.PrevGlitch();
        }
        if (this.key_manager.keys_pressed[KeyManager.S]) {
            player.NextGlitch();
        }
        if ((this.key_manager.keys_pressed[KeyManager.SHIFT] && this.key_manager.keys_down[KeyManager.R]) || (this.key_manager.keys_down[KeyManager.SHIFT] && this.key_manager.keys_pressed[KeyManager.R])) {
            InputManager.RestartGame();
        }
    };
    InputManager.prototype.SpeakingUpdate = function (player) {
        if (this.key_manager.keys_pressed[KeyManager.DOWN]) {
            player.StartPressingDown();
        }
        else if (this.key_manager.keys_down[KeyManager.DOWN]) {
            player.PressDown();
        }
        else if (this.key_manager.keys_up[KeyManager.DOWN]) {
            player.StopPressingDown();
        }
    };
    InputManager.RestartGame = function () {
        room_manager.Restart();
        room = room_manager.GetRoom();
        console.log("start");
        then = Date.now();
        bg_name = "RoccoW_outOfSight";
        if (resource_manager.play_music) {
            stopMusic();
            startMusic();
        }
    };
    return InputManager;
}());
