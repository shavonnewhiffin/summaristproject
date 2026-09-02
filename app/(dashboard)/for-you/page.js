import ForYou from '../../components/foryou/ForYou'
import Selected from '../../components/foryou/Selected'
import Recommended from '../../components/foryou/Recommended'
import Suggested from '../../components/foryou/Suggested'

export default function Page() {
  return (
    <ForYou>
      <Selected />
      <Recommended />
      <Suggested />
    </ForYou>
  );
}
