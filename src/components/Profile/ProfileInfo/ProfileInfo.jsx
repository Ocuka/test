
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user_img.jpg';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {

    const { profile, updateUserStatus, status } = props

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000' alt='wallpaper' />
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.userData}>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto}
                        alt='large_avatar' />
                    <div className={classes.description}>
                        <div>
                            <div><b>{profile.fullName}</b></div>
                            <ProfileStatusWithHooks status={status || 'Your status'} updateUserStatus={updateUserStatus} />

                        </div>
                        <div>
                            <div> {profile.aboutMe}</div>
                            <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
                            <div>Job description: {profile.lookingForAJobDescription}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <div>Contacts:</div>
                    <div>
                        facebook: {profile.contacts.facebook != null
                            ? <a className={classes.userLink} href={profile.contacts.facebook} target='_blank'>
                                {profile.contacts.facebook}</a>
                            : '-'}
                    </div>
                    <div>
                        website: {profile.contacts.website != null
                            ? <a className={classes.userLink} href={profile.contacts.website} target='_blank'>
                                {profile.contacts.website}</a>
                            : '-'}
                    </div>
                    <div>
                        vk: {profile.contacts.vk != null
                            ? <a className={classes.userLink} href={profile.contacts.vk} target='_blank'>
                                {profile.contacts.vk}</a>
                            : '-'}
                    </div>
                    <div>
                        twitter: {profile.contacts.twitter != null
                            ? <a className={classes.userLink} href={profile.contacts.twitter} target='_blank'>
                                {profile.contacts.twitter}</a>
                            : '-'}
                    </div>
                    <div>
                        instagram: {profile.contacts.instagram != null
                            ? <a className={classes.userLink} href={profile.contacts.instagram} target='_blank'>
                                {profile.contacts.instagram}</a>
                            : '-'}
                    </div>
                    <div>
                        youtube: {profile.contacts.youtube != null
                            ? <a className={classes.userLink} href={profile.contacts.youtube} target='_blank'>
                                {profile.contacts.youtube}</a>
                            : '-'}
                    </div>
                    <div>
                        github: {profile.contacts.github != null
                            ? <a className={classes.userLink} href={profile.contacts.github} target='_blank'>
                                {profile.contacts.github}</a>
                            : '-'}
                    </div>
                    <div>
                        mainLink: {profile.contacts.mainLink != null
                            ? <a className={classes.userLink} href={profile.contacts.mainLink} target='_blank'>
                                {profile.contacts.mainLink}</a>
                            : '-'}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;