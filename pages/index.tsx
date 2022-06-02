//* import comps
import CustomHead from '../components/core/CustomHead'
import DefaultMargin from '../components/_layouts/DefaultMargin'
import PageHeader from '../components/_headers/PageHeader'
import TwoColumn from '../components/_layouts/TwoColumn'

//* import libraries

const Home = () => {

  return (
    <>
      <CustomHead
        title="Learne"
        description="Learn something new"
      />
      <DefaultMargin>
        <TwoColumn>
          <div>
            <PageHeader
              header="Be a better you"
              tagline="Create, enroll, or bring your own course. Be in command of your own growth and education!"
            />
          </div>
        </TwoColumn>
      </DefaultMargin>
    </>
  )
}

export default Home