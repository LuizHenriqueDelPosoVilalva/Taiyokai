import LogoAndMenu from "./UI/LogoAndMenu"
import Video from "./UI/Video"
import Menu from "./UI/Menu"
import TopBar from "../commons/TopBar"

function AppHomePage () {
    return (
        <>
            <TopBar />
            <LogoAndMenu />
            <Video />
            <Menu />
        </>
    )
}

export default AppHomePage