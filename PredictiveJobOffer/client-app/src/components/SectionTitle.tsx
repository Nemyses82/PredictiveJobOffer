import React, { Component } from 'react';

export class SectionTitle extends Component<any, any> {
   static displayName = SectionTitle.name;

   render() {
      return (
         <div>
            <div className="section-title text-center clearfix">
               <h3>{this.props.title}</h3>
               <hr />
               <p className="lead">Innovative <b>Job Listing search engine</b> based on sophisticated algorithms on <b>AWS Personalize</b>. Try to query our system to find the best job offer, match it, and upscale your career!</p>
            </div>
         </div>
      );
   }
}