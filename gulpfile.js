var gulp = require('gulp');
var uglify = require('gulp-uglify')
var concat = require('gulp-concat');

gulp.task('default', done => {
    gulp.src(['/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-font/build/sal-components-font.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/jquery/dist/jquery.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/angular/angular.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/eq.js/dist/eq.min.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/mwc-application-helper/dist/main.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-foundation-tiny/build/sal-components-foundation-tiny.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-core/build/sal-components-core.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-chiclet/build/sal-components-chiclet.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-symbol-icon/build/sal-components-symbol-icon.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/d3/d3.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-range-vernier/build/sal-components-range-vernier.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-infotip/build/sal-components-infotip.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/es5-shim/es5-shim.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/asterix-core/build/asterix-core.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/markets-components-core/build/markets-components-core.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-chart-iframe/build/sal-components-chart-iframe.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/markets-components-svgplot/build/markets-components-svgplot.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/markets-components-chartdatamanager/build/markets-components-chartdatamanager.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/handlebars/handlebars.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/markets-components-minichart/build/markets-components-minichart.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-mini-quote-chart/build/sal-components-mini-quote-chart.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-segment-band/build/sal-components-segment-band.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-paging/build/sal-components-paging.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-reader-modal/build/sal-components-reader-modal.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-reader-archive/build/sal-components-reader-archive.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-news-filings/build/sal-components-news-filings.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-chart/build/sal-components-chart.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-key-stats/build/sal-components-key-stats.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-short-interest/build/sal-components-short-interest.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-quote/build/sal-components-quote.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-svgtip/build/sal-components-svgtip.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-valuation-capsule/build/sal-components-valuation-capsule.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-valuation-capsule-indication/build/sal-components-valuation-capsule-indication.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-report-table/build/sal-components-report-table.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-help-center/build/sal-components-help-center.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-competitors/build/sal-components-competitors.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-institution-latest-research/build/sal-components-institution-latest-research.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-scroll-to/build/sal-components-scroll-to.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-print-pdf/build/sal-components-print-pdf.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-nav/build/sal-components-nav.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-take/build/sal-components-take.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-company-profile/build/sal-components-company-profile.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-fairvalue-historical-chart/build/sal-components-fairvalue-historical-chart.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-price-fairvalue/build/sal-components-price-fairvalue.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-vertical-bar-chart/build/sal-components-vertical-bar-chart.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-trailing-returns/build/sal-components-trailing-returns.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-financials/build/sal-components-financials.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-eqsv-financials/build/sal-components-eqsv-financials.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-valuation/build/sal-components-valuation.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-oper-perf/build/sal-components-oper-perf.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-dividends/build/sal-components-dividends.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-ownership/build/sal-components-ownership.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-transaction-history/build/sal-components-transaction-history.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-executive/build/sal-components-executive.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-disclosure/build/sal-components-disclosure.js ',
        '/Users/nagarwa/Repository/Server/salrepo/bower_components/sal-components-inview-plugin/build/sal-components-inview-plugin.js ',
        '/Users/nagarwa/Repository/Server/salrepo/components/app/build/sal-components-app.js'
])
    .pipe(concat('sal-components.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))

    done();
});
