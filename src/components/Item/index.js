import {Link} from 'react-router-dom'

import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <li>
      <Link to={`/courses/${id}`} className="link-el">
        <img className="ci" src={logoUrl} alt={name} />
        <p className="cn">{name}</p>
      </Link>
    </li>
  )
}

export default Item
