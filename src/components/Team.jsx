import React from "react";
import { members} from "./teamMembers.js";

function Team() {
    return (
        <div className="team-container" id="team">
            <div className="heading">
                <h1>EXECUTIVE BOARD</h1>
            </div>
            <div className="cards-container">
                {
                    members.slice(0, 1).map((member, index) => {
                            return (
                                <div className="card">
                                    <img src={member.photo} alt={member.alt}/>
                                    <h2>{member.name}</h2>
                                    <p>{member.title}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="cards-container">
                {
                    members.slice(1).map((member, index) => {
                            return (
                                <div className="card">
                                    <img src={member.photo} alt={member.alt}/>
                                    <h2>{member.name}</h2>
                                    <p>{member.title}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {/*/!*Display the cards in horizontal scroll*!/*/}
            {/*<div className="heading">*/}
            {/*    <h1>FORMER MEMBERS</h1>*/}
            {/*</div>*/}
            {/*<div className="container former-member">*/}
            {/*    <div className="scroll">*/}
            {/*        {*/}
            {/*            former_members.map((member, index) => {*/}

            {/*                return (<div className="card">*/}
            {/*            <div className="card-image">*/}
            {/*                <img src="https://i.ibb.co/WfMhk7c/Image-1.jpg" loading="lazy" className="responsive"*/}
            {/*                     alt="Images"/>*/}
            {/*            </div>*/}
            {/*            <div className="card-inner">*/}
            {/*                <h3 className="text text-title">Angkor Wat</h3>*/}
            {/*                <p className="paragraph truncate">*/}
            {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, necessitatibus quam*/}
            {/*                    laboriosam odio reiciendis eaque a.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>)*/}

            {/*            }*/}
            {/*            )*/}
            {/*        }*/}


            {/*    </div>*/}
            {/*</div>*/}


        </div>
)
}

export default Team;