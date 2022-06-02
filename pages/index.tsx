//* import comps
import CustomHead from '../components/core/CustomHead'
import DefaultMargin from '../components/_layouts/DefaultMargin'
import PageHeader from '../components/_headers/PageHeader'
import TwoColumn from '../components/_layouts/TwoColumn'

//* import libraries
import Image from 'next/image'

const Home = () => {

  return (
    <>
      <CustomHead
        title="Learne"
        description="Learn something new"
      />
      <DefaultMargin>
        <TwoColumn
          addClass="gap-20"
        >
          <div>
            <PageHeader
              header="Be a better you"
              tagline="Create, enroll, or bring your own course. Be in command of your own growth and education!"
            />
          </div>
          <Image
            src='/stack-of-books.png'
            layout="responsive"
            width={700}
            height={433}
          />
        </TwoColumn>
      </DefaultMargin>
    </>
  )
}

export default Home