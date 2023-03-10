import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface Props {
    playerRef: React.RefObject<Player>;
    showControls: boolean;
    buttonsControl: never[];
    controlsDark: boolean;
}

export const PlayerLottie = ({ buttonsControl, controlsDark, playerRef, showControls }: Props) => {
    return (
        <div className="container-player">
            <Player
                src='https://assets5.lottiefiles.com/packages/lf20_NDRSDjCFia.json'
                className="player"
                ref={playerRef}
            >
                <Controls
                    visible={showControls}
                    buttons={buttonsControl}
                    darkTheme={controlsDark}
                />
            </Player>
        </div>
    )
}
