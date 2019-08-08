<template>
  <div class="goods"></div>
</template>
<script>
import { getAllGoods } from '/api/goods.js'
import { recommend } from '/api/index.js'
import YButton from '/components/YButton'
import YShelf from '/components/shelf'
export default {
  data() {
    return {
      goods: [],
      noResult: false,
      error: false,
      min: '',
      max: '',
      loading: true,
      timer: null,
      sortType: 1,
      windowHeight: null,
      windowWidth: null,
      recommendPanel: [],
      sort: '',
      currentPage: 1,
      total: 0,
      pageSize: 20
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this._getAllGoods()
      this.loading = true
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this._getAllGoods()
      this.loading = true
    },
    _getAllGoods() {
      let cid = this.$route.query.cid
      if (this.min !== '') {
        this.min = Math.floor(this.min)
      }
      if (this.max !== '') {
        this.max = Math.floor(this.max)
      }
      let params = {
        params: {
          page: this.currentPage,
          size: this.pageSize,
          sort: this.sort,
          priceGt: this.min,
          priceLte: this.max,
          cid: cid
        }
      }
      getAllGoods(params).then(res => {
        if (res.success === true) {
          this.total = res.result.total
          this.goods = res.result.data
          this.noResult = false
          if (this.total === 0) {
            this.noResult = true
          }
          this.error = false
        } else {
          this.error = true
        }
        this.loading = false
      })
    },
    // 默认排序
    reset() {
      this.sortType = 1
      this.sort = ''
      this.currentPage = 1
      this.loading = true
      this._getAllGoods()
    },
    // 价格排序
    sortByPrice(v) {
      v === 1 ? (this.sortType = 2) : (this.sortType = 3)
      this.sort = v
      this.currentPage = 1
      this.loading = true
      this._getAllGoods()
    }
  },
  watch: {
    $route(to, from) {
      if (to.fullPath.indexOf('/goods?cid=') >= 0) {
        this.cId = to.query.cid
        this._getAllGoods()
      }
    }
  },
  created() {},
  mounted() {
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
    this._getAllGoods()
    recommend().then(res => {
      let data = res.result
      this.recommendPanel = data[0]
    })
  },
  components: {
    YButton,
    YShelf
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../assets/style/mixin';
@import '../../assets/style/theme';

.nav {
  height: 60px;
  line-height: 60px;
  > div {
    display: flex;
    align-items: center;
    a {
      padding: 0 15px;
      height: 100%;
      @extend %block-center;
      font-size: 12px;
      color: #999;
      &.active {
        color: #5683ea;
      }
      &:hover {
        color: #5683ea;
      }
    }
    input {
      @include wh(80px, 30px);
      border: 1px solid #ccc;
    }
    input + input {
      margin-left: 10px;
    }
  }
  .price-interval {
    padding: 0 15px;
    @extend %block-center;
    input[type='number'] {
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      border-radius: 5px;
    }
  }
}

.goods-box {
  > div {
    float: left;
    border: 1px solid #efefef;
  }
}

.no-info {
  padding: 100px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .no-data {
    align-self: center;
  }
}

.img-item {
  display: flex;
  flex-direction: column;
}

.el-pagination {
  align-self: flex-end;
  margin: 3vw 10vw 2vw;
}

.section {
  padding-top: 8vw;
  margin-bottom: -5vw;
  width: 1218px;
  align-self: center;
}

.recommend {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}
</style>
