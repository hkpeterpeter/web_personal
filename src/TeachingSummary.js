import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Grid,
  Glyphicon,
  Panel,
  Label,
  Button,
} from 'react-bootstrap';

import './TeachingSummary.css';

const summaryGoodPointsHeader = <h3><Glyphicon glyph="thumbs-up" /> What was good about Peter?</h3>;
const summaryBadPointsHeader = <h3><Glyphicon glyph="thumbs-down" /> How might Peter be improved? </h3>;

class TeachingSummary extends React.Component {
  render() {
    const summary = this.props.summary;
    const reports = this.props.reports;
    let goodPoints = null;
    let badPoints = null;
    let pastCodes = null;
    if (summary.goodPoints !== undefined) {
      goodPoints = summary.goodPoints.map((m, i) => <li key={i}>{m}</li>);
    }
    if (summary.badPoints !== undefined) {
      badPoints = summary.badPoints.map((m, i) => <li key={i}>{m}</li>);
    }
    if (summary.pastCodes !== undefined) {
      pastCodes = summary.pastCodes.map((m, i) => <Label className="Margin" key={i} bsStyle="warning">{m}</Label>);
    }
    const filteredReports = reports.filter(m => m.code === summary.code || (
      summary.pastCodes !== undefined &&
      summary.pastCodes.indexOf(m.code) !== -1));
    const reportDownloadLinks = filteredReports.map((m, i) => <Button className="Margin" key={i} href={`evaluation/${m.fileName}`}><Glyphicon glyph="download-alt" /> {m.semester} {m.section} </Button>);
    return (
      <div>
        <h4><strong>{summary.code} - {summary.title}</strong></h4>
        { summary.pastCodes !== undefined && <h5>Related: {pastCodes}</h5>}
        { <h5>TA Evaluation: {reportDownloadLinks} </h5> }
        { summary.description !== undefined && <Panel>{summary.description}</Panel> }
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Panel bsStyle="success" header={summaryGoodPointsHeader}>
                { summary.goodPoints !== undefined && <ol>{goodPoints}</ol> }
              </Panel>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Panel bsStyle="danger" header={summaryBadPointsHeader}>
                { summary.badPoints !== undefined && <ol>{badPoints}</ol> }
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

TeachingSummary.propTypes = {
  summary: PropTypes.shape({
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    goodPoints: PropTypes.arrayOf(PropTypes.string),
    badPoints: PropTypes.arrayOf(PropTypes.string),
    pastCodes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  reports: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TeachingSummary;
