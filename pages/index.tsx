//* import comps
import CustomHead from '../components/core/CustomHead'
import PageHeader from '../components/_headers/PageHeader'
import { SolidHrefButton } from '../components/_buttons'
import { SectionHeaderH2 } from '../components/_headings'

//* import layouts
import {
  DefaultMargin,
  TwoColumn,
  ButtonGroup
} from '../components/_layouts'

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
          <img
            src="/gradient-blur.png"
            className="absolute -top-16 w-10/12 text-center"
          />
        <div className="">
        </div>
        <TwoColumn
          addClass="gap-20 py-20"
        >
          <div>
            <PageHeader
              header="Be a better you"
              tagline="Create, enroll, or bring your own course. Be in command of your own growth and education!"
            />
            <ButtonGroup>
              <SolidHrefButton
                text="Signup"
                href="/signup"
                color="altYellow"
              />
            </ButtonGroup>
          </div>
          <Image
            src='/stack-of-books.png'
            alt="Book stack"
            layout="responsive"
            width={700}
            height={433}
          />
        </TwoColumn>
        <div
          className="w-1/2 pt-10"
        >
          <SectionHeaderH2>
            Create your own course
          </SectionHeaderH2>
        </div>
        <TwoColumn>
          <Image
            src="/chalkboard.png"
            alt="Chalkboard"
            layout="responsive"
            width={400}
            height={446}
          />
        </TwoColumn>
      </DefaultMargin>
    </>
  )
}

export default Home