import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Button from 'flarum/components/Button';
import Placeholder from 'flarum/components/Placeholder';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import Dropdown from 'flarum/components/Dropdown';
import Link from 'flarum/components/Link';
import craftBadges from './craftBadges';
import getFirstImage from './getFirstImage';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/utils/humanTime';
import icon from 'flarum/helpers/icon';
import { truncate } from 'flarum/utils/string';

function previewText(text, lenght = 150) {
  let preview;
  if (text.length) {
    preview = <div className="previewPost">
      {truncate(text, lenght)}
    </div>;
  } else {
    preview = '';
  }
  return preview;
}

export default function gridTemplate(state) {
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
      <div class="DiscussionList-discussions flexCard">
        {state.discussions.map((discussion, i) => {
          return (
            <div key={discussion.id()} data-id={discussion.id()}
              className={'CardsListItem smallCard' +
              (discussion.isHidden() ? ' DiscussionListItem--hidden' : '')
              }>
                {/* Controls */}
                {DiscussionControls.controls(discussion, this).toArray().length
                ? Dropdown.component(
                  {
                    icon: 'fas fa-ellipsis-v',
                    className: 'DiscussionListItem-controls',
                    buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
                  },
                  DiscussionControls.controls(discussion, this).toArray()
                )
                : ''}

                <Link href={app.route.discussion(discussion, 0)} className='cardLink'>
                  {/* Badges */}
                  {craftBadges(discussion.badges().toArray())}

                  {/* Image */}
                  <img className='previewCardImg' alt={discussion.title()}
                    src={getFirstImage(discussion.firstPost())} />
                  
                  {/* Here should was the tags but we exclude these */}

                  {/* Discussion title */}
                  <div className='cardTitle'>
                    <h2>{discussion.title()}</h2>
                  </div>

                  {/* Excerpt */}
                  {previewText(discussion.firstPost().contentPlain())}

                  {/* Footer */}
                  <div className='cardSpacer'>
                    <div className='cardFooter'>
                      {/* Author image */}
                      <Link href={discussion.user() ? app.route.user(discussion.user()) : '#'}>
                        {avatar(discussion.user(), { className: 'Avatar--mini' })}
                      </Link>

                      {/* Nickname and created date */}
                      <div className="actor">
                        {username(discussion.user())}
                        <div className="date">
                          {humanTime(discussion.createdAt())}
                        </div>
                      </div>

                      {/* Reply count */}
                      <Link href={app.route.discussion(discussion, discussion.lastPostNumber())} class="replies"
                        title={(discussion.replyCount() > 0) ? app.translator.trans('list-grid-layouts.forum.index.last_reply') + humanTime(discussion.lastPostedAt()) : ''}>
                        <div className="commentIcon">{icon('far fa-comment-alt')}</div>
                        {discussion.replyCount()}
                      </Link>
                    </div>
                  </div>
                </Link>
            </div>
          );
        })}
      </div>
      <div className='DiscussionList-loadMore'>{loading}</div>
    </div>
  );
};