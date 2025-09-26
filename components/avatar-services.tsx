import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition 
            position="right" 
            className="bottom-0 left-0 hidden md:inline-block md:absolute"
        >
            {/* Se deja vacío para cumplir con children */}
            <></>
        </MotionTransition>
    );
}

export default AvatarServices;
