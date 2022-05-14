import * as Cookies from 'es-cookie';
import { extend, override } from 'flarum/extend';
import Button from 'flarum/components/Button';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionPage from 'flarum/components/DiscussionPage';
import IndexPage from 'flarum/components/IndexPage';
import listTemplate from './utils/listTemplate';
import gridTemplate from './utils/gridTemplate';

function modifyLayout() {
  if (Cookies.get('grid') === 'true') {
    Cookies.set('grid', 'false');
    override(DiscussionList.prototype, 'view', function() {
      const state = this.attrs.state;

      return listTemplate(state);
    });
  }
  else {
    Cookies.set('grid', 'true');
    override(DiscussionList.prototype, 'view', function() {
      const state = this.attrs.state;

      if (app.current.matches(DiscussionPage)) {
        return listTemplate(state);
      }
      else {
        return gridTemplate(state);
      }
    });
  }
}

app.initializers.add('block-cat/list-grid-layouts', () => {
  override(DiscussionList.prototype, 'view', function(original) {
    const state = this.attrs.state;

    if (Cookies.get('grid') === 'true') {
      if (app.current.matches(DiscussionPage)) {
        return listTemplate(state);
      }
      else
        return gridTemplate(state);
    }
    else {
      return original();
    }
  });

  extend(IndexPage.prototype, 'actionItems', function(items) {
    items.add(
      'gridLayout',
      Button.component({
        title: Cookies.get('grid') === 'true' ? app.translator.trans('list-grid-layouts.forum.index.list_tooltip') : app.translator.trans('list-grid-layouts.forum.index.grid_tooltip'),
        icon: Cookies.get('grid') === 'true' ? 'fas fa-list-ul' : 'fas fa-th-large',
        className: 'Button Button--icon',
        onclick: modifyLayout.bind(this),
      })
    );
  });
});
