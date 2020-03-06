// *********************
// IMPORTS
// *********************
import { LightningElement, api, track, wire } from 'lwc';
// Import Apex Class
import getRelatedOpp from '@salesforce/apex/RelatedOpportunitySearch.getOpportunityInfo'
// Import Record Information
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'

const FIELDS = [
    'Opportunity.AccountId',
]

export default class RelatedOpportunityInformation extends LightningElement {

    @api recordId; //Grab the Record Id

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    opportunity;

    // Call RelatedOpportunitySearch Apex Class
    // Grab Defined Related Opportunity Fields
    @wire(getRelatedOpp, {recordId: '$recordId'}) opportunities;
    

}