class HomeController < ApplicationController
    def index 
        @home_component_props = 'Hello React and Rails!'
    end
end