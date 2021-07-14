import React from 'react'
import './Footer.css'

const linkedin = "";
const twitter = ""
const instagram = ""
const github = ""
function Footer() {
    return (
        <div class="footer">
            <ul>
                <h1>Instamovie</h1>
                <p>Instamovie uses the TMDB Api and is not released under the MIT license.</p>
                <div class="icons">
                    <a href={twitter}><i class="fab fa-twitter"></i></a>
                    <a href={github}><i class="fab fa-github"></i></a>
                    <a href={instagram}><i class="fab fa-instagram"></i></a>
                    <a href={instagram}><i class="fab fa-linkedin-in"></i></a>
                </div>
                <p>© developed by Tarun Saini</p>
            </ul>
        </div>
    )
}

export default Footer