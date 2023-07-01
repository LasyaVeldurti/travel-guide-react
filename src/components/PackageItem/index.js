import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {imageUrl, description, name} = packageDetails
  return (
    <li className="list-item">
      <img className="travel-img" src={imageUrl} alt={name} />
      <h1 className="name">{name}</h1>
      <p className="description">{description} </p>
    </li>
  )
}

export default PackageItem
