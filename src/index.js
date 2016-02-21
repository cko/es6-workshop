import GroupedKatas from './grouped-katas.js';
import {KATAS_URL} from './config';

import React from 'react';
import KataGroupsComponent from './component/kata-groups'
class Page extends React.Component {
      render() {
              var groupNames = Object.keys(this.props.katas.groups);
                  return (
                                <KataGroupsComponent groupNames={groupNames} />
                                    );
                    }
}

new GroupedKatas().load(KATAS_URL)
      .then(groupedKatas => {
              //document.getElementById('app').innerHTML = JSON.stringify(groupedKatas);
              ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
  });
