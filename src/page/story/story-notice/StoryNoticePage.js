import StoryHeader from '../components/StoryHeader';
import StoryMain from '../components/StoryMain';
import StoryNoticeLists from '../story-notice/StoryNoticeLists';

const StoryNoticePage = () => {
  return (
    <>
      <StoryHeader>Notice</StoryHeader>
      <StoryMain>
        <h2>알씨타운 공지사항입니다</h2>
        <p>
          오늘의 알씨타운은
          <br />
          이런 소식을 전달하고 있습니다.
        </p>
        <StoryNoticeLists />
      </StoryMain>
    </>
  );
};

export default StoryNoticePage;
