import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails

  return (
    <li className={`card ${className}`}>
      <h1 className="head1">{title}</h1>
      <p className="describes">{description}</p>
      <img src={imgUrl} alt={title} className="img" />
    </li>
  )
}

export default UserProfile
