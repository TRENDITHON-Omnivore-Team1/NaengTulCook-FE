import { useLocation } from "react-router-dom";
import Topbar  from '@/components/common/topbar/Topbar';

export default function CommunityWritePage() {
  const location = useLocation();
  return (
    <>
      <Topbar pageTitle={location.state.type}/>
    </>
  );
}
