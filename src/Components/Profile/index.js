import React  from 'react';
import './style.css'
const Profile = () => {
    return (
        <div class="profile_skills">
        <div class="container">
            <div class="profile">
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <ul class="profile-list">
                    <li class="profile-item">
                        <span>Name</span>
                        Asala Lahchim
                    </li>
                    <li class="profile-item">
                        <span>Birthday</span>
                        16/12/2003
                    </li>
                    <li class="profile-item">
                        <span>Address</span>
                        Riyad Salam,Agadir
                    </li>
                    <li class="profile-item">
                        <span>Phone</span>
                        06 48 28 87 06
                    </li>
                    <li class="profile-item">
                        <span>Email</span>
                        assalalhc@gmail.com
                    </li>
                    <li class="profile-item">
                        <span>Website</span>
                        <span class="web">www.asalaah.com</span>
                    </li>
                </ul>
            </div>
            
            <div class="skills">
                <h2 class="skills-title">Some <span>skills</span></h2>
                <p class="skills-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </p>
                <div class="bar">
                    <span class="title">html/css/python/js</span>
                    <span class="perc">90%</span>
                    <div class="parent">
                        <span class="sp1"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">Bootstrap</span>
                    <span class="perc">80%</span>
                    <div class="parent">
                        <span class="sp2"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">algorithme</span>
                    <span class="perc">70%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Profile;
