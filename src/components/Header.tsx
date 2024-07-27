import * as React from "react"
import { useState } from "react"
import bgHeaderDesktop from "../assets/images/bg-header-desktop.svg"
import bgHeaderMobile from "../assets/images/bg-header-mobile.svg"


function Header() {
    const [click, setClick] = useState(false)

    return (
        <div className="w-full bg-[#5da5a4] relative mb-10 overflow-hidden ">
            <div>
                <img
                    className="w-[100vw] md:block hidden"
                    src={bgHeaderDesktop}
                    alt="bbcakgound of big blue header " />
                <img
                    className="w-[100vw] md:hidden block"
                    src={bgHeaderMobile}
                    alt="bbcakgound of big blue header" />
            </div>
        </div>
    )
}

export default Header
