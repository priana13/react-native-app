import { memo } from "react";
import { Button, Pressable } from "react-native";

const PlayButton = () => {

    return (

        <Pressable>
            <Button title="play">Play</Button>
        </Pressable>
    )
}

export default memo(PlayButton);