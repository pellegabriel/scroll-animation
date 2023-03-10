import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface Props {
    playerRef: React.RefObject<Player>;
    showControls: boolean;
    buttonsControl: never[];
    controlsDark: boolean;
}

export const PlayerLottie2 = ({ }: Props) => {
    return (
        <div className="container-player">
            <Player
                src='https://assets6.lottiefiles.com/packages/lf20_hocmonst.json'
                className="player"
                id="firstLottie"
                
            >
            </Player>
        </div>
    )
}