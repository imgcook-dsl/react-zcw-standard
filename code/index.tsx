'use strict';

import React, { Component } from 'react';

import './index.scss';
const print = function(value) {
  console.log(value);
};
class Block_0 extends Component {
  render() {
    return (
      <div className="mod2">
        <div
          className="titleWrap"
          onClick={e => {
            console.log(e);
          }}
        >
          {true && <span className="title">当前钱包关联的基金</span>}
        </div>
        <div className="titleWrap_2">
          <span className="title_2">000759 平安财富宝货币</span>
        </div>
        <div className="titleWrap_3">
          <span className="title_3">003465 平安金管家货币</span>
        </div>
        <div className="greatWallMoneyWrap">
          <span className="greatWallMoney">000861 长城货币E</span>
        </div>
        <div className="titleWrap_4">
          <span className="title_4">000379 平安日增利货币</span>
        </div>
        <span className="goldenEagleCurrency">210012 金鹰货币A</span>
      </div>
    );
  }
}
class Page_0 extends Component {
  state = { title: '钱包说明' };
  constructor(props, context) {
    super();
  }
  componentDidMount() {
    console.log(123);
  }
  handlClick() {
    console.log('按钮点击');
  }
  render() {
    return (
      <div className="page">
        <span className="submain">业绩稳健 收益喜人</span>
        <span className="row">
          钱包是奕丰定期挑选平台上收益最高的T+0货币基金，再经过研究组合后推出的一款低风险/收益稳健的现金管理服务。
        </span>
        <span className="row1">钱包的收益持续跑赢全市场90%的货币基金，业绩优秀。</span>
        <span className="row2">甄选基金 智选策略</span>
        <span className="row3">钱包通过动态收益管理模型，定期甄选多只表现最佳的T+0货币基金组合。</span>
        <span className="row4">
          为了减少短期的收益释放或机构大额交易对收益率的影响，钱包采用28日年化收益率对钱包内的T+0基金进行排序充值。
        </span>
        <span className="row5">
          *若您已持仓钱包中的某只基金，但该基金此时的近28日年化收益率并不是排序中，则优先充值钱包中近28日年化收益率排序最高的基金至1万元，再依次排序对钱包内的基金充值。
        </span>
        <span className="row6">
          当所有的基金持仓≥1万元后，根据收益排序，依次/循环充值基金1万元，直至购买金额剩余为0。
        </span>
        <span className="row7">一键下单 0手续费</span>
        <span className="row8">
          无论是充值还是取现，无需重复/繁琐操作，一个订单即可完成多只T+0基金操作。所有钱包交易0手续费。
        </span>
        <span className="row9">5万额度 随时申赎</span>
        <span className="row10">
          根据目前法规要求，单日快速取现金额不超过1万元。钱包当前通过搭配多只T+0基金，智能分散到多只T+0基金，实现收益最大化的同时，将单日快速取现额度累加至5万元。
        </span>
        <span className="row11">取现灵活 快速到账</span>
        <span className="row12">快速取现灵活方便，节假日可以在2小时内到账。</span>
      </div>
    );
  }
}
export default Page_0;
