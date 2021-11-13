import React from 'react'
import profilePic from '../../assets/images/Shane professional.jpg';

function About() {
    return (
        <section class="folio-section" id="about-me">
            <h2>About Me</h2>
            <div>
                <div class="photo-container">
                    <img src={profilePic} alt="" />
                    <div class="quick-bio">
                        <p class="para-one"><span>Name:</span> Shane Bramble-Wade</p>
                        <p class="para-one"><span>Hometown:</span> Orlando,FL</p>
                        <p class="para-one">
                            <span>Education:</span> The University of Central Florida (2020)
                        </p>
                        <p class="para-one">
                            <span>Hobbies:</span> Basketball, Soccer, Reading, Anime, Movies
                        </p>
                        <p class="para-one">
                            <span>Favourite Quote:</span>
                            <span class="quote">Success doesn’t come from what you do occasionally, it comes
                                from what you do consistently.</span>
                        </p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
                    viverra suspendisse potenti nullam. Tellus id interdum velit laoreet
                    id donec ultrices tincidunt. Nunc consequat interdum varius sit
                    amet. Morbi leo urna molestie at elementum eu facilisis. Sit amet
                    nulla facilisi morbi tempus iaculis urna id. Vitae proin sagittis
                    nisl rhoncus. Arcu dictum varius duis at consectetur lorem. Ornare
                    aenean euismod elementum nisi quis. Vulputate sapien nec sagittis
                    aliquam malesuada bibendum arcu vitae. Pellentesque elit ullamcorper
                    dignissim cras tincidunt lobortis feugiat vivamus. Faucibus interdum
                    posuere lorem ipsum dolor sit amet consectetur adipiscing. Mi ipsum
                    faucibus vitae aliquet nec ullamcorper. Feugiat pretium nibh ipsum
                    consequat. Non tellus orci ac auctor augue mauris augue neque
                    gravida.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
                    viverra suspendisse potenti nullam. Tellus id interdum velit laoreet
                    id donec ultrices tincidunt. Nunc consequat interdum varius sit
                    amet. Morbi leo urna molestie at elementum eu facilisis. Sit amet
                    nulla facilisi morbi tempus iaculis urna id. Vitae proin sagittis
                    nisl rhoncus. Arcu dictum varius duis at consectetur lorem. Ornare
                    aenean euismod elementum nisi quis. Vulputate sapien nec sagittis
                    aliquam malesuada bibendum arcu vitae. Pellentesque elit ullamcorper
                    dignissim cras tincidunt lobortis feugiat vivamus. Faucibus interdum
                    posuere lorem ipsum dolor sit amet consectetur adipiscing. Mi ipsum
                    faucibus vitae aliquet nec ullamcorper. Feugiat pretium nibh ipsum
                    consequat. Non tellus orci ac auctor augue mauris augue neque
                    gravida.
                </p>
            </div>
        </section>
    )
}

export default About;
