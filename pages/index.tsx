//* import comps
import CustomHead from '../components/core/CustomHead'
import PageHeader from '../components/_headers/PageHeader'
import { SolidHrefButton } from '../components/_buttons'
import {
  SectionHeaderH2,
  SubSectionHeaderH3,
  TaglineHeaderH4
} from '../components/_headings'
import ValuePropList from '../components/_layouts/ValuePropList'

//* import layouts
import {
  // DefaultMargin,
  TwoColumn,
  ButtonGroup
} from '../components/_layouts'

//* import libraries
import Image from 'next/image'
import CreateCourseValue from '../utils/create_course.json'
import LearnValue from '../utils/learn.json'

const Home = () => {

  return (
    <>
      <CustomHead
        title="Learne"
        description="Learn something new"
      />
      {/* <DefaultMargin> */}
          <img
            src="/gradient-blur.png"
            className="absolute object-cover lg:-top-16 lg:w-10/12 text-center"
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
        <TwoColumn
          addClass="gap-20 py-20"
      >
        <Image
          src="/chalkboard.png"
          alt="Chalkboard"
          className="object-fit"
          layout="responsive"
          width={400}
          height={446}
        />
        {/* <div className="object-contain">
        </div> */}
          <ValuePropList
            dataSource={CreateCourseValue}
          />
        </TwoColumn>
        <TwoColumn>
          <div>
            <SectionHeaderH2>
              Enroll
            </SectionHeaderH2>
            <SubSectionHeaderH3>
              A broad selection of courses
            </SubSectionHeaderH3>
            <TaglineHeaderH4>
              What are you interested in?
            </TaglineHeaderH4>
          </div>
          <img
            src="/ruler.png"
            className="mx-auto"
            alt="Ruler"
          />
        </TwoColumn>
        <TwoColumn>
          <div>
            <SectionHeaderH2>
              Learn
            </SectionHeaderH2>
            <SubSectionHeaderH3>
              Embed third-party course videos
            </SubSectionHeaderH3>
          </div>
          <img
            src="/pencil.png"
            className="mx-auto"
            alt="Pencil"
          />
        </TwoColumn>
        <ValuePropList
          dataSource={LearnValue}
          addClass="grid grid-cols-1 md:grid-cols-2 gap-20 py-10"
        />
    </>
  )
}

export default Home