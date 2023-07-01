import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PackageItem from '../PackageItem'

import './index.css'

class TravelGuide extends Component {
  state = {travelPackagesList: [], isLoading: true}

  componentDidMount() {
    this.getTravelGuidePackages()
  }

  getTravelGuidePackages = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    if (response.ok === true) {
      const packagesList = data.packages.map(eachPackage => ({
        id: eachPackage.id,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
        name: eachPackage.name,
      }))
      this.setState({travelPackagesList: packagesList, isLoading: false})
    }
  }

  render() {
    const {travelPackagesList, isLoading} = this.state

    console.log(travelPackagesList)
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <>
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          </>
        ) : (
          <>
            <ul className="ul-container">
              {travelPackagesList.map(eachItem => (
                <PackageItem key={eachItem.id} packageDetails={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TravelGuide
