const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should(); describe("Temperatures", () => {
    describe("GET /temperatures", () => {
        // Test to get all temperatures record
        it("should get all temperatures record", (done) => {
            chai.request(app)
                .get('/v1/temperatures')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single temperature record
        it("should get a single temperatures record", (done) => {
            const id = 'Abidjan';
            chai.request(app)
                .get(`/v1/temperatures/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single temperatures record
        it("should not get a single temperatures record", (done) => {
            const id = 'Sunnyvale';
            chai.request(app)
                .get(`/v1/temperatures/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});