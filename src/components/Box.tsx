import * as React from "react"
import BoxMobile from "./BoxMobile"
import { Button } from "./ui/button"
import BoxDesktop from "./BoxDesktop"
import photosnap from "../assets/images/photosnap.svg"
interface Props {
    children: React.ReactNode
}



const Box: React.FC<Props> = ({ children }) => {
    return (
        <div className="shadow-lg relative bg-white shadow-[#c3e4e5] p-5 rounded-sm">
            {<BoxDesktop
                img={photosnap}
                name={"nn"}
                title={"tt"}
                status={"ss"}
                timeObj={{ time: '1d ago', rate: "full time", country: "usa ony" }}
                search={"ss"}
            />}
            <BoxMobile
                img={photosnap}
                name={"nn"}
                title={"tt"}
                status={"ss"}
                timeObj={{ time: '1d ago', rate: "full time", country: "usa ony" }}
                search={"ss"} />
            <div className="flex gap-5 mt-5 flex-wrap">
                {null && <Button
                    style={{
                        textTransform: "capitalize",
                        background: "#f0f6f6",
                        color: "#659e9c",
                        fontWeight: "bold"
                    }}
                >
                    {children}
                </Button>}
            </div>
        </div>
    )
}

export default Box
