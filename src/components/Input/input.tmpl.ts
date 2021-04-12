export const tmpl = `
 <div class="input-container">
       <label for="input">{{label}}</label>
       <input data-uuid="{{inputUuid}}" type="{{type}}" class="input" value="{{value}}" placeholder="{{placeholder}}"/>
       <span style="display: none" data-uuid="{{errorMessageUuid}}" class="input__error-message">{{errorMessage}}</span>
</div>
`;
