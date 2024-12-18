export default function Background ({bgColor}) {
    return (
        <div style={{position:'fixed', width: '100vw', height: '100vh', backgroundImage: bgColor, zIndex: -1}}> </div>
    )
}