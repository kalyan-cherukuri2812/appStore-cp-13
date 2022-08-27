import './index.css'

const TabItem = props => {
  const {tabListDetails, tabStatus, isActive} = props
  const {displayText, tabId} = tabListDetails

  const clickTab = () => {
    tabStatus(tabId)
  }
  return (
    <li className="list-tab-items">
      <button
        type="button"
        className={isActive === true ? 'list-tab-btn active' : 'list-tab-btn'}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
