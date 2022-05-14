import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Button from 'flarum/components/Button';
import Placeholder from 'flarum/components/Placeholder';
import DiscussionListItem from 'flarum/components/DiscussionListItem';

export default function listTemplate(state) {
  const params = state.getParams();
  let loading;

  if (state.isLoading()) {
    loading = LoadingIndicator.component();
  }
  else {
    if (state.moreResults) {
      loading = Button.component(
        {
          className: 'Button',
          onclick: state.loadMore.bind(state),
        },
        app.translator.trans('core.forum.discussion_list.load_more_button')
      );
    }
  }

  if (state.empty()) {
    const text = app.translator.trans('core.forum.discussion_list.empty_text');
    return <div className="DiscussionList">{Placeholder.component({ text })}</div>;
  }

  return (
    <div className={'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')}>
      <ul className="DiscussionList-discussions">
        {state.discussions.map((discussion) => {
          return (
            <li key={discussion.id()} data-id={discussion.id()}>
              {DiscussionListItem.component({ discussion, params })}
            </li>
          );
        })}
      </ul>
      <div className="DiscussionList-loadMore">{loading}</div>
    </div>
  );
};
