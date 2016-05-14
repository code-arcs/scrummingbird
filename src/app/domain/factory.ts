import User from './user';
import Repository from './repository';
import Milestone from './milestone';
import Label from './label';
import Issue from './issue';

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

    domainObject = type === Repository.toString() ? data.map(r => {
      return new Repository()
    }):Repository;


    domainObject = type === Milestone.toString() ? data.map(r => {
      return new Milestone();
    }):Milestone;


    domainObject = type === Label.toString() ? data.map(r => {
      return new Label();
    }):Label;


    domainObject = type === Issue.toString() ? data.map(r => {
      return new Issue()
    }):Issue;


    return domainObject;
  }
}
