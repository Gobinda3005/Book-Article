import React from "react";
import { Component } from "react";
import './blc.css';
import Home from "./components/Home.js";
class BookListClass extends Component
{
    render(props)
    {
        return(
            <div>
                <p className='text-center'>Connections Unleashed" Explore the Power of Meaningful Connections In this thought-provoking <br />
               and enlightening book, I wanted to take you on a transformative journey into the depths of human interactions<br />
               and relationships. Through a diverse range of topics, Me as an Author invites you to delve into the intricacies<br />
               of forging true connections and finding success in a bustling society.<br />
               From uncovering the secrets of navigating complex relationships to understanding the importance of genuine friendships,<br />
               "Connections Unleashed" offers invaluable insights and practical advice. Discover how to transcend <br />
               the generation gap and embrace the wisdom of love that transcends time. <br />
               Drawing upon real-life experiences, psychological studies, and captivating anecdotes,<br />
               I Gobinda Panda skillfully examines the constant comparison that plagues modern society and provides<br />
               strategies for maintaining authenticity. Take a leap into the mesmerizing animal kingdom and explore<br />
               the parallels between the natural world and our own intricate social dynamics.<br />
               "Connections Unleashed" is not just another book; it's a catalyst for transformation.<br />
               Are you ready to embark on a journey of self-discovery and unlock the true potential of your relationships?</p>
               <Home />
               <a href="https://www.linkedin.com/in/gobinda-panda-b70b9b120/" target="_blank">
               </a>
               <div>
                <h5 className='text-center'>Gobinda<span className='text-info bg-dark'>Panda</span></h5>
               </div>
            </div>
        )
    }
}
export default BookListClass
