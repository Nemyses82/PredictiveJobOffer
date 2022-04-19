import React, { Component } from 'react';

export class StickyFooter extends Component<any, any> {
   static displayName = StickyFooter.name;

   render() {
      return (
         <div>
            <div id="sitefooter-wrap" className="stickyfooter">
               <div id="sitefooter" className="container">
                  <div id="copyright" className="row">
                     <div className="col-md-6 col-sm-12 text-left">
                        <p><a href="http://predictivejoboffer.com">PredictiveJobOffer ®</a> INC. is a designed and registered trademark</p>
                     </div>
                     <div className="col-md-6 col-sm-12">
                        <ul className="list-inline text-right">
                           <li><a href="#">Terms of Usage</a></li>
                           <li><a href="#">Copyrights</a></li>
                           <li><a href="#">License</a></li>
                           <li><a href="#">Contact</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}