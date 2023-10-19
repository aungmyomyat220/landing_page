import LandingPageHeader from './component/header/page'
import LandingPageSearchBox from './component/body/SearchBox'
import LandingPageGrid from './component/body/Grid'
import LandingPageProfile from './component/body/profile'
import LandingPageBanner from './component/body/banner'
import LandingPageTrending from './component/body/cards'
import LandingPagePartners from './component/body/partners'
import LandingPageFooter from './component/footer/page'

export default function Home() {
  return (
      <>
          <LandingPageHeader></LandingPageHeader>
          <LandingPageSearchBox></LandingPageSearchBox>
          <LandingPageGrid></LandingPageGrid>
          <LandingPageProfile></LandingPageProfile>
          <LandingPageBanner></LandingPageBanner>
          <LandingPageTrending></LandingPageTrending>
          <LandingPagePartners></LandingPagePartners>
          <LandingPageFooter></LandingPageFooter>
      </>
  )
}
