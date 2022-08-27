import './index.css'

const AppItem = props => {
  const {appListDetails} = props
  const {appName, imageUrl} = appListDetails
  return (
    <li className="appItem-list">
      <img className="appItem-img" src={imageUrl} alt={appName} />
      <p className="appItem-para">{appName}</p>
    </li>
  )
}

export default AppItem
