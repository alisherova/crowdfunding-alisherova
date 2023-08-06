import ProgressBar from "../../components/ProgressBar";
import {
  Container,
  Campaign,
  CampaignHeader,
  MainImage,
  CampaignDetails,
  Amount,
  TotalAmount,
  Strong,
  CampaignContent,
  CampaignTitle,
  Supporter,
  DaysLeft,
  Button,
  CampaignSummary,
  CampaignDescription
} from "./SignleCampaign.styled";

function SingleCampaign() {
  return (
    <Container>
      <Campaign>
        <CampaignHeader>
          <MainImage src="https://picsum.photos/800" alt="title" />
          <CampaignDetails>
            <Amount>5,000,000 so'mdan</Amount>
            <TotalAmount>
              <Strong>1,000,000</Strong> so'm yig'ildi
            </TotalAmount>
            <ProgressBar percentage={40} />
            <Supporter>
              <b>25</b> odam yordam berdi
            </Supporter>
            <DaysLeft>
              <b>20</b> kun qoldi
            </DaysLeft>
            <Button>Qo'llab-quvvatlash</Button>
          </CampaignDetails>
        </CampaignHeader>
        <CampaignContent>
          <CampaignTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
            deserunt.
          </CampaignTitle>
          <CampaignSummary>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            aspernatur inventore doloremque iste dolore eaque, libero corrupti
            atque maxime, accusamus officia! Eos est nisi sint incidunt,
            expedita ea facilis dolore officiis sequi molestias voluptas ut
            fugiat quod perferendis vel porro aliquam tenetur ipsam suscipit at.
            Quidem deleniti quo animi unde consequatur corrupti eligendi, hic
            alias perferendis quasi nobis, facere quam!
          </CampaignSummary>
          <CampaignDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            culpa nemo tempore laboriosam ab obcaecati, dicta, ut distinctio,
            iste atque officiis vel aliquid? Minima, porro itaque, cupiditate
            aut sequi quidem ullam quasi reprehenderit ipsum tempore et! Aliquam
            commodi nemo dicta laboriosam non reprehenderit quasi. Itaque iste
            quibusdam molestiae pariatur soluta rem ad, perspiciatis eum fugiat
            inventore sapiente neque, impedit veritatis quasi harum perferendis
            ut iure odit tempora laboriosam eveniet autem? Hic quasi, quas dolor
            et iste labore eveniet consectetur sunt recusandae adipisci ullam
            nihil voluptatem tempore velit inventore voluptate quo optio itaque.
            Expedita aspernatur ea quod cumque, modi animi consequuntur!
          </CampaignDescription>
        </CampaignContent>
      </Campaign>
    </Container>
  );
}

export default SingleCampaign;
