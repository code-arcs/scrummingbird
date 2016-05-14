import User from './user';
import {Repository} from './repository';
import {Milestone} from './milestone';
import {Label} from './label';
import {Issue} from './issue';

export class Factory {
  constructor() {
  }

  public translate(type:any, data:any) {
    let domainObject;

    domainObject = type === User.toString() ? data.map(ghUser => {
      const user = new User();
      user.id = ghUser.github.id || '';
      user.email = ghUser.github.email || '';
      user.username = ghUser.github.username || '';
      user.name = ghUser.github.displayName || '';
      user.profileImage = ghUser.github.profileImageUrl || '';
      user.accessToken = ghUser.github.accessToken || '';

      return user;
    }):User;

    domainObject = type === Repository.toString() ? data.map(r =>
      new Repository(r.id, r.name, r.full_name, r.url)) : 'error';

    domainObject = type === Milestone.toString() ? data.map(r =>
      new Milestone(r.number, r.id, r.titel, r.description, r.open_issues, r.closed_issues)) : 'error';

    domainObject = type === Label.toString() ? data.map(r =>
      new Label(r.name, r.color, r.url)) : 'error';

    domainObject = type === Issue.toString() ? data.map(r =>
      new Issue(r.number, r.id, r.state, r.titel, r.body, r.milestone.id, r.labels)) : 'error';


    return domainObject;
  }
}
