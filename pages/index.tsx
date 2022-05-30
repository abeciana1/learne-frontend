//* import comps
import CustomHead from '../components/core/CustomHead'
import DefaultMargin from '../components/_layouts/DefaultMargin'
import PageHeader from '../components/_headers/PageHeader'

const Home = () => {

  return (
    <>
      <CustomHead
        title="Learne"
        description="Learn something new"
      />
      <DefaultMargin>
          <PageHeader
            header="Be a better you"
            tagline="Create, enroll, or bring your own course. Be in command of your own growth and education!"
          />
      </DefaultMargin>
    </>
  )
}

export default Home