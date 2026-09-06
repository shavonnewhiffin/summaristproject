
import { Suspense } from 'react'
import ForYou from '../../components/foryou/ForYou'
import Selected from '../../components/foryou/Selected'
import Recommended from '../../components/foryou/Recommended'
import Suggested from '../../components/foryou/Suggested'
import { SelectedSkeleton } from '../../components/skeletons/SelectedSkeleton'
import { RecommendedSkeleton } from '../../components/skeletons/RecommendedSkeleton'
import { SuggestedSkeleton } from '../../components/skeletons/SuggestedSkeleton'

export default function Page() {
  return (
    <ForYou>
      <Suspense fallback={<SelectedSkeleton />}>
        <Selected />
      </Suspense>
      <Suspense fallback={<RecommendedSkeleton />}>
        <Recommended />
      </Suspense>
      <Suspense fallback={<SuggestedSkeleton />}>
        <Suggested />
      </Suspense>
    </ForYou>
  );
}
