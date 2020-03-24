'use strict';

import React, { Component } from 'react';

import image_2 from 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/75302de06cdf11eabf5d6b2fcf2464b6.png';
import image_19 from 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/75e3ed806cdf11eab9e92d4f666acdce.png';
import image_13 from 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/75be64206cdf11eabb723f627742f66c.png';
import image_64 from 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/774b6cc06cdf11eab2d3459305206a7f.png';
import image_56 from 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/76a4cc806cdf11ea97d21fea93bcadf5.png';
import image_59 from 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/76cd8a306cdf11eab05f37c85c91d51c.png';

import './index.scss';

const print = function(value) {
  console.log(value);
};
class Block_0 extends Component {
  render() {
    return (
      <div className="mod1">
        <div className="group">
          <span className="title_2">富国中证红利指数增强富国中证红…</span>
          <img className="share" src={image_2} />
        </div>
        <span className="num">10032</span>
      </div>
    );
  }
}
class Block_1 extends Component {
  render() {
    return (
      <div className="mod2">
        <div className="container_2">
          <span className="totalAmountYuan">总金额（元）</span>
          <div className="block_2">
            <span className="transactions">交易记录</span>
            <img className="hebingxingzhuang" src={image_19} />
          </div>
        </div>
        <span className="word">23,665.00</span>
        <img className="line" src={image_13} />
        <div className="block_3">
          <div className="group_2">
            <span className="dailyIncome">日收益（01-13）</span>
            <span className="num_2">+3.82</span>
          </div>
          <div className="empty" />
          <div className="container_3">
            <span className="cumulativeIncome">累计收益</span>
            <span className="count">+2.62</span>
          </div>
        </div>
      </div>
    );
  }
}
class Block_2 extends Component {
  render() {
    return (
      <div className="mod3">
        <div className="group_3">
          <span className="holdingRateReturn">持有收益率</span>
          <span className="word_2">+0.53%</span>
          <span className="shareHeld">持有份额</span>
          <span className="count_2">424.89</span>
          <span className="dailyRiseFall">日涨跌幅</span>
          <span className="text_2">+0.77%</span>
          <span className="unitPriceHeld">持有单价</span>
          <span className="num_3">1.1768</span>
          <span className="latestNetValue">最新净值</span>
          <span className="txt">1.183（01-13）</span>
          <span className="cashDividends">现金分红</span>
          <span className="count_3">0.00</span>
        </div>
      </div>
    );
  }
}
class Block_3 extends Component {
  render() {
    return (
      <div className="mod4">
        <div className="empty_2" />
        <div className="container_4">
          <div className="outer_2">
            <span className="incomeCurve">收益曲线</span>
            <div className="div" />
            <span className="cumulativeIncome_2">收益累计</span>
          </div>
          <div className="colorDiv" />
        </div>
        <img className="banner" src={image_64} />
      </div>
    );
  }
}
class Block_4 extends Component {
  render() {
    return (
      <div className="mod5">
        <div className="block_4">
          <span className="dividendMethod">分红方式</span>
          <span className="dividendReinvestment">红利再投资</span>
          <img className="PagingRight" src={image_56} />
        </div>
        <div className="div_2" />
        <div className="group_4">
          <span className="frequentlyAskedQuestions">常见问题</span>
          <img className="PagingRight_2" src={image_59} />
        </div>
      </div>
    );
  }
}
class Block_5 extends Component {
  render() {
    return (
      <div className="mod6">
        <div className="container_5">
          <div className="sellWrap">
            <span className="sell">卖出</span>
          </div>
          <div className="dingtouWrap">
            <span className="dingtou">定投</span>
          </div>
          <div className="buyWrap">
            <span className="buy">买入</span>
          </div>
        </div>
      </div>
    );
  }
}
class Page_0 extends Component {
  render() {
    return <div className="page"></div>;
  }
}
export default Page_0;
