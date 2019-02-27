import React from 'react';
import Navtitle from '../../components/navTitle/index.js';
import { Tabs, WhiteSpace } from 'antd-mobile';
import ModulSurvey from './children/modulSurvey'
import ModulMatch from './children/modulMatch'
import ModulProgress from './children/modulProgress'
import ModulResult from './children/modulResult'
const tabs = [
  {title: '项目概况'},
  {title: '项目配套'},
  {title: '项目进展'},
  {title: '交易结果'}
];

export default class MoreMsg extends React.Component {
  render() {
    return (
      <div className="moreMsg page page_bg">
        <Navtitle title="更多信息" goBack={this.props.history.goBack}/>
        <div className="page_bd">
          <Tabs tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div>
              <ModulSurvey></ModulSurvey>
            </div>
            <div>
              <ModulMatch></ModulMatch>
            </div>
            <div>
              <ModulProgress></ModulProgress>
            </div>
            <div>
              <ModulResult></ModulResult>
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}
